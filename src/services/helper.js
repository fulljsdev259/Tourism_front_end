export function image_formatter(url, size) {
  if (url.includes("cloudinary")) {
    return url.replace("upload/", `upload/w_${size}/`);
  }
  return url;
}
