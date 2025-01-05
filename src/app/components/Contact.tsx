import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In touch or Book Consultation</h2>

        <div className="md:flex justify-between  md:px-24">
          <div className="space-y-2 md:space-y-6">
            {/* <p className="text-lg">
              <span className="font-bold">Bhumi Saxena</span> <br />
              Senior Software Developer
            </p> */}
            <p className="text-md md:text-lg"> <br />
              <a
                href="mailto:bhumisaxena0223@gmail.com"
                className="text-purple-500 hover:underline"
              >
                📧 bhumisaxena0223@gmail.com
              </a>{" "}
              <br />
              📱{" "}
              <a
                href="tel:+919783302312"
                className="text-purple-500 hover:underline"
              >
                +91 97833 02312
              </a>
            </p>
          </div>
          <div className="space-y-6 pt-6">
            {/* Social Links */}
            <div className="flex justify-center space-x-6 ">
            <a
              href="https://twitter.com/yourusername" // Replace 'yourusername' with your actual Twitter handle
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-md hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.723 0-4.928 2.204-4.928 4.927 0 .386.045.762.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.314 0-.622-.03-.921-.086.631 1.953 2.445 3.376 4.604 3.416-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.165-.067 2.179 1.397 4.768 2.212 7.557 2.212 9.055 0 14.001-7.497 14.001-13.986 0-.21-.005-.423-.014-.635.961-.695 1.797-1.56 2.457-2.549z" />
              </svg>
            </a>

              <a
                href="https://github.com/bhumisaxena0223"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-md hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.385.6.111.793-.26.793-.577 0-.285-.01-1.041-.015-2.044-3.338.726-4.042-1.609-4.042-1.609-.546-1.386-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.204.085 1.837 1.236 1.837 1.236 1.07 1.835 2.805 1.305 3.49.997.108-.775.419-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.478 11.478 0 0 1 3.003-.403c1.02.005 2.047.137 3.003.403 2.291-1.554 3.297-1.23 3.297-1.23.655 1.653.244 2.874.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.431.371.815 1.103.815 2.222 0 1.606-.014 2.899-.014 3.293 0 .32.192.694.8.576C20.565 21.796 24 17.299 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/bhumi-saxena-005ba9152"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-md hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm-11 20H5V9h3v11zm-1.5-12.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM20 20h-3v-5.5c0-1.3-.4-2.2-1.4-2.2-.8 0-1.3.6-1.5 1.2-.1.2-.1.5-.1.8V20h-3V9h3v1.5c.4-.6 1.1-1.5 2.7-1.5 2 0 3.3 1.3 3.3 4.1V20z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
