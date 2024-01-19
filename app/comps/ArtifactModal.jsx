"use client";

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Captcha from "./HCaptcha"
import emailjs from '@emailjs/browser';

const formSchema = z.object({ "email": z.string().email().min(1).max(255), "subject": z.string().min(1).max(150), "key334": z.string().min(1).max(255) })

export default function ArtifactModal({ titleArtifact }) {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      key334: "",
    },
  })

  async function onSubmit(values) {
    const hCaptchaToken = form.getValues('hCaptcha');

    if (hCaptchaToken) {
      const currentUrl = window.location.href;

      try {
        const response = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            reply_to: values.email,
            subject: values.subject,
            message: values.key334,
            user_referrer: currentUrl,
            artifact_title: titleArtifact,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY
        );

        console.log('Email sent successfully!', response);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    } else {
      console.error('Captcha not passed.');
    }
  };

  return (
    <Form {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject Title</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="key334"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormDescription>
                Thank you for your feedback. We will be in touch with you shortly.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hCaptcha"
          render={({ }) => (
            <FormItem>
              <FormLabel>Please confirm you are human:</FormLabel>
              <FormControl>
                <Captcha onVerify={(token) => {
                  form.setValue("hCaptcha", token);
                  setIsCaptchaValid(true);
                }} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={!isCaptchaValid}>Submit</Button>
      </form>
    </Form>
  )
}
