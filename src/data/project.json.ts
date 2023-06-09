export interface Template {
    link: string;
    title: string;
    details: string;
  };
  const one: Template = {
    link: "https://github.com/NiloyMallick/voice_based_message",
    title: "Voice Based Message Service",
    details: "voice-based message service using Google speech-to-text technology is a cutting- edge communication tool that allows users to send messages using only their voice. With this service, users can speak their messages instead of typing them out, \
    and Google's speech-to-text technology will automatically transcribe the message into text format. \
    The advantages of this service are clear. For one, it is much faster than typing out a message, particularly for longer messages. Additionally, it can be particularly useful for people who have di culty typing or who prefer to communicate using their voice."
  };
  const two: Template = {
  link: "https://github.com/NiloyMallick/SunwayBackend",
    title: "Sunway-Study",
    details: "Web Application that provides students with the necessary information and guidance to obtain a visa for studying in a foreign country. These websites typically o er detailed instructions on how to fill out visa applications, what documents are required, and what fees are associated with the visa application process."
  };
  
  export const bytitle = {
    one,
      two,
  
  };
  export const projects = Object.values(bytitle);