function importAll(r: any) {
  let images: any = {};
  r.keys().forEach((item: any, index: any) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/images/", false, /\.(png|jpe?g|svg)$/)
);

export default images;
