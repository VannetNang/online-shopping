const NotFoundIcon = () => {
  return (
    <>
      <svg
        className="w-32 h-32 md:w-48 md:h-48 text-indigo-500 mb-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm-1.293-8.293a1 1 0 011.414 0L13 10.586l.879-.879a1 1 0 111.414 1.414L14.414 12l.879.879a1 1 0 11-1.414 1.414L13 13.414l-.879.879a1 1 0 01-1.414-1.414L11.586 12l-.879-.879a1 1 0 010-1.414z"
          opacity="0.3"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L12 12"
        />
      </svg>
    </>
  );
};

export default NotFoundIcon;
