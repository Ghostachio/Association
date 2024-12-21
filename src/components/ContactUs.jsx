const ContactUs = () => {
  return (
    <section className="flex flex-col w-1/4 p-3 m-6 gap-6 items-center">
      <h1 className="text-5xl">Contacter Nous</h1>
      <a href="mailto:contact@text.com">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Envoyer un Mail
        </button>
      </a>
    </section>
  );
};

export default ContactUs;
