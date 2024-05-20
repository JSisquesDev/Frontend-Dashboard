module.exports = {
  async convertFileToBase64(file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      console.log('called: ', reader);
      console.log(reader.result);
    };

    return;
  },
};
