const ContactUs = () => {
  return (
    <section
      className="flex flex-col w-1/4 p-3 m-6 gap-6 items-center"
      id="contact"
    >
      <h1 className="text-5xl text-center">Contacter Nous</h1>
      <a href="mailto:troupe.alfan.assil@gmail.com">
        <button className="btn btn-wide bg-green text-white rounded-lg font-semibold text-xl">
          Envoyer un Mail
        </button>
      </a>
    </section>
  );
};

export default ContactUs;
