import React from "react";

const Modal = ({ isOpen, onClose, data, isTopVoice }) => {
  console.log(data);

  const ModalData = isTopVoice
    ? {
        name: data.first_name + " " + data.last_name,
        title: data.title,
        about: data.about,
        email: data.email,
        linkedin: data.linkedin,
        website: data.faculty_page,
        facebook: data.facebook,
        instagram: data.instagram,
        youtube: data.youtube,
      }
    : {
        name: data.name,
        about: data.about_page,
        email: data.email,
        linkedin: data.linkedin,
        website: data.website,
        facebook: data.facebook,
        instagram: data.instagram,
        youtube: data.youtube,
      };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white border border-gray-200 shadow-sm rounded-2xl w-[682px] h-[695px] p-8 flex flex-col gap-6 relative">
        <div className="absolute right-6 top-6 z-10">
          <button
            className="w-5 h-5 bg-white text-black border-none text-sm font-medium flex items-center justify-center transform rotate-90 cursor-pointer"
            onClick={onClose}
          >
            x
          </button>
        </div>

        <div className="flex items-center gap-4 px-8">
          {ModalData?.logo && (
            <img src="image.png" alt="Logo" className="w-16 h-16" />
          )}
          <div className="flex flex-col">
            {ModalData?.name && (
              <div className="text-xl font-bold tracking-wide text-slate-900 whitespace-nowrap">
                {ModalData.name}
              </div>
            )}
            <div className="w-[186px] h-6 font-poppins font-bold text-base leading-6 flex items-center tracking-[0.5px] uppercase text-[#020817] order-1 flex-none grow-0 whitespace-nowrap">
              {ModalData.title}
            </div>
          </div>
          {!isTopVoice && (
            <div className="bg-sky-200 text-black text-sm px-4 py-2 rounded-md">
              Nonprofit
            </div>
          )}
        </div>

        <div className="px-8 flex flex-col gap-4">
          <h3 className="text-base font-bold uppercase tracking-wide text-slate-900">
            About
          </h3>
          <p className="text-base text-slate-900">{ModalData.about}</p>
          <p className="text-base italic text-slate-900"> {ModalData.email}</p>

          <div className="relative w-full h-12 flex items-center gap-10">
            {/* LinkedIn */}
            {ModalData.linkedin != null && (
              <div className="w-11 h-11 relative">
                <a
                  href={ModalData.linkedin} // 🔁 Replace with your actual LinkedIn ID
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full h-full rounded-full border-2 border-black bg-white opacity-25 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#000000"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.3h.1c.65-1.2 2.2-2.5 4.5-2.5 4.8 0 5.7 3.1 5.7 7.1V24h-5v-7.6c0-1.8 0-4-2.4-4s-2.7 1.8-2.7 3.8V24h-5V8z" />
                    </svg>
                  </div>
                </a>
              </div>
            )}
            {/* Instagram */}
            {ModalData.instagram != null && (
              <div className="w-11 h-11 relative">
                <div className="w-full h-full border-2 border-black rounded-full bg-white opacity-25 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#242424"
                  >
                    <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 4.25A4.25 4.25 0 1 1 7.75 12 4.25 4.25 0 0 1 12 7.75Zm0 1.5A2.75 2.75 0 1 0 14.75 12 2.75 2.75 0 0 0 12 9.25Zm4.75-2.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
                  </svg>
                </div>
              </div>
            )}

            {/* Facebook */}
            {ModalData.facebook != null && (
              <div className="w-11 h-11 relative">
                <div className="w-full h-full border-2 border-black rounded-full bg-white opacity-25 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#242424"
                  >
                    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.84 3.44 8.85 7.94 9.8v-6.93H7.1v-2.87h2.84V9.41c0-2.8 1.66-4.35 4.2-4.35 1.22 0 2.5.22 2.5.22v2.75h-1.41c-1.39 0-1.82.87-1.82 1.76v2.11h3.1l-.5 2.87h-2.6v6.93c4.5-.95 7.94-4.96 7.94-9.8Z" />
                  </svg>
                </div>
              </div>
            )}

            {/* YouTube */}
            {ModalData.youtube != null && (
              <div className="w-11 h-11 relative">
                <div className="w-full h-full border-2 border-black rounded-full bg-white opacity-25 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#242424"
                  >
                    <path d="M10 15.5l6-3.5-6-3.5v7z" />
                    <path d="M21.8 8s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9-2.7-.2-6.7-.2-6.7-.2h-.1s-4 0-6.7.2c-.4 0-1.2.1-1.9.9-.6.6-.8 2-.8 2S3 9.6 3 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.6.7 2 .8 1.5.1 6.5.2 6.5.2s4 0 6.7-.2c.4 0 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2z" />
                  </svg>
                </div>
              </div>
            )}
            {/* Website */}
            {ModalData.website != null && (
              <div className="w-11 h-11 relative">
                <a
                  href={ModalData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full h-full rounded-full border-2 border-black bg-white opacity-25 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#000000"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10
            10-4.477 10-10S17.523 2 12 2zm-1 17.93C7.062 19.436 4 16.07 4
            12c0-.692.098-1.36.276-2H11v7.93zM11 10H5.082A8.001 8.001 0 0 1
            11 4.07V10zm2-5.93A8.001 8.001 0 0 1 18.918 10H13V4.07zM13
            19.93V12h6.724A8.001 8.001 0 0 1 13 19.93z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="px-8 flex flex-col gap-4">
          <h3 className="text-base font-bold uppercase tracking-wide text-slate-900">
            {isTopVoice ? "Recommendation" : "Publication"}
          </h3>
          <div className="flex flex-col gap-1 w-full">
            <a
              href="https://example.com"
              className="text-base underline text-slate-900"
            >
              Title of Publication: Sample Topic
            </a>
            <div className="text-sm font-medium text-slate-500">
              November 27, 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
