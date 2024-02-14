const Hero = () => {
  return (
    <section className="flex flex-col font-openSans mx-auto my-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2 pt-8 md:pt-12">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Responsible Tech Repo
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          GoodBot strengthens technology governance. We&apos;re working towards building a more humane technology ecosystem.
        </p>
      </div>
    </section>
  );
};

export default Hero;
