export const CssModuleGallery = `
.gallery {
  display: grid;
  width: 100%;
  padding: 5%;
  grid-template-columns: repeat(auto-fill, minmax(150px, 200px));
  grid-gap: 25px;
  justify-content: center;
  background: rgb(248, 248, 248);
  background: linear-gradient(
    45deg,
    rgba(248, 248, 248, 1) 0%,
    rgba(247, 247, 247, 1) 25%,
    rgba(244, 244, 244, 1) 45%,
    rgba(245, 245, 245, 1) 69%,
    rgba(245, 245, 245, 1) 91%
  );
}

.card {
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 10%;
  overflow: hidden;
  border: solid 1px #0001;
  border-radius: 6px;
  cursor: pointer;
  background-color: #ffff;
  transition: 0.4s linear;
  box-shadow: -1px 1px 5px #0001;
}
.card > img {
  width: 100%;
  transform: translate(39px, 20px);
  transition: 0.4s linear;
}
.card > img:hover {
  width: 100%;
  transform: translate(32px, 20px);
}
.card > figcaption {
  position: absolute;
  top: 5%;
  left: 7%;
  width: 70%;
}
.card > figcaption > h3 {
  margin: 0;
  font-size: 18px;
}
.card > figcaption > p {
  font-size: 13px;
  margin: 8px 0px;
}
.card > figcaption > span {
  font-size: 12px;
  font-weight: bold;
}

@media (max-width: 400px) {
  .gallery {
    grid-template-columns: repeat(auto-fill, minmax(100px, 145px));
  }
  .card > figcaption {
    top: 7.5%;
    width: 70%;
  }
}.gallery {
  display: grid;
  width: 100%;
  padding: 5%;
  grid-template-columns: repeat(auto-fill, minmax(150px, 200px));
  grid-gap: 25px;
  justify-content: center;
  background: rgb(248, 248, 248);
  background: linear-gradient(
    45deg,
    rgba(248, 248, 248, 1) 0%,
    rgba(247, 247, 247, 1) 25%,
    rgba(244, 244, 244, 1) 45%,
    rgba(245, 245, 245, 1) 69%,
    rgba(245, 245, 245, 1) 91%
  );
}

.card {
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 10%;
  overflow: hidden;
  border: solid 1px #0001;
  border-radius: 6px;
  cursor: pointer;
  background-color: #ffff;
  transition: 0.4s linear;
  box-shadow: -1px 1px 5px #0001;
}
.card > img {
  width: 100%;
  transform: translate(39px, 20px);
  transition: 0.4s linear;
}
.card > img:hover {
  width: 100%;
  transform: translate(32px, 20px);
}
.card > figcaption {
  position: absolute;
  top: 5%;
  left: 7%;
  width: 70%;
}
.card > figcaption > h3 {
  margin: 0;
  font-size: 18px;
}
.card > figcaption > p {
  font-size: 13px;
  margin: 8px 0px;
}
.card > figcaption > span {
  font-size: 12px;
  font-weight: bold;
}

@media (max-width: 400px) {
  .gallery {
    grid-template-columns: repeat(auto-fill, minmax(100px, 145px));
  }
  .card > figcaption {
    top: 7.5%;
    width: 70%;
  }
}
`;
