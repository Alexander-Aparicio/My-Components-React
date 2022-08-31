export const CssModuleBarP = `
.component {
  width: 100%;
  padding: 5%;
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
.boxBar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 500px;
}
.name {
  margin: 0;
  line-height: 1.5;
  font-weight: bold;
  color: #515151;
}
.bar {
  width: 70%;
  max-width: 350px;
  border: solid 1px #0001;
  height: 30px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 2px #0002;
}
.progress {
  height: 28px;
  background-color: rgb(250, 200, 99);
  border-radius: 6px;
  box-shadow: 1px 1px 2px #0003;
  display: flex;
  align-items: center;
  justify-content: center;
}
.progress > p {
  margin: 0;
  color: #515151;
  font-size: 14px;
  font-weight: bold;
}
.boxReset {
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 0px;
}
.reset {
  border-style: none;
  border: 1px solid #0002;
  background-color: rgb(40, 44, 52);
  color: #f4f4f4;
  padding: 8px 15px;
  border-radius: 6px;
  cursor: pointer;
}
`;
