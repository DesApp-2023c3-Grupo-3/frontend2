export const obtenerIDdeVideo = (url: string) => {
  var match = url.match(/[?&]?(v=|vi=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

  if (match !== null) return match[2];
  else {
    return '';
  }
};
