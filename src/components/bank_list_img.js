const baseurl = "./pub";
const ran_img = () => {
  const bank_imgs = [
    {
      title: null,
      urls: `${baseurl}/Bankino.webp`,
      turn: true
    },
    {
      title: null,
      urls: `${baseurl}/BKI.webp`,
      turn: true
    },
    {
      title: null,
      urls: `${baseurl}/Gardeshgari.webp`,
      turn: true

    },
    {
      title: null,
      urls: `${baseurl}/IZbank.webp`,
      turn: true

    },
    {
      title: null,
      urls: `${baseurl}/Mellat.webp`,
      turn: true

    },
    {
      title: null,
      urls: `${baseurl}/Melli.webp`,
      turn: true

    },
    {
      title: null,
      urls: `${baseurl}/Pasargad.webp`,
      turn: true

    },
    {
      title: null,
      urls: `${baseurl}/Resalat.webp`,
      turn: true

    },
    {
      title: null,
      urls: `${baseurl}/Saderat.webp`,
      turn: true

    },
    {
      title: null,
      urls: `${baseurl}/Sepehr.webp`,
      turn: true

    },
    {
      title: null,
      urls: `${baseurl}/Shahr_plus.webp`,
      turn: true

    },
    {
      title: null,
      urls: `${baseurl}/Sinamobilebank.webp`,
      turn: true
    },
// ####################################################################
{
  title: null,
  urls: `${baseurl}/Bankino.webp`,
  turn: true
},
{
  title: null,
  urls: `${baseurl}/BKI.webp`,
  turn: true
},
{
  title: null,
  urls: `${baseurl}/Gardeshgari.webp`,
  turn: true

},
{
  title: null,
  urls: `${baseurl}/IZbank.webp`,
  turn: true

},
{
  title: null,
  urls: `${baseurl}/Mellat.webp`,
  turn: true

},
{
  title: null,
  urls: `${baseurl}/Melli.webp`,
  turn: true

},
{
  title: null,
  urls: `${baseurl}/Pasargad.webp`,
  turn: true

},
{
  title: null,
  urls: `${baseurl}/Resalat.webp`,
  turn: true

},
{
  title: null,
  urls: `${baseurl}/Saderat.webp`,
  turn: true

},
{
  title: null,
  urls: `${baseurl}/Sepehr.webp`,
  turn: true

},
{
  title: null,
  urls: `${baseurl}/Shahr_plus.webp`,
  turn: true

},
{
  title: null,
  urls: `${baseurl}/Sinamobilebank.webp`,
  turn: true
},

  ]

  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,18,19,20,21,22,23],
    ranNums = [],
    i = nums.length,
    j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
  }

  bank_imgs.map((img, index) => {
    img.title = ranNums[index];
  });

  bank_imgs.sort(function (a, b) {
    return a.title - b.title;
  });

  console.log("111111111111111111111111111" , bank_imgs);
  return bank_imgs;
};

export {ran_img};
