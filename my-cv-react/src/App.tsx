import Toggle from "./components/toggle";
import { Trans, useTranslation } from "react-i18next";
import Button from "./components/button";

function App() {
  function convertDriveLink(inputLink: any) {
    // Kiểm tra xem đường link có đúng định dạng hay không
    const regex =
      /https:\/\/drive\.google\.com\/file\/d\/(.+?)\/view\?usp=drive_link/;
    const match = inputLink.match(regex);

    if (match) {
      const fileId = match[1];
      // Tạo đường link mới
      const outputLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
      return outputLink;
    } else {
      return "Đường link không hợp lệ. Vui lòng nhập lại!";
    }
  }

  // Sử dụng hàm với đường link đầu vào
  const inputLink = `https://drive.google.com/file/d/1ppyDbZnLQYypn77f58ubQRt0JkEXWRuw/view?usp=drive_link`;
  const convertedLink = convertDriveLink(inputLink);
  console.log(convertedLink);

  const { i18n } = useTranslation();
  return (
    <div className="bg-gray-50 h-screen w-screen flex justify-center">
      <div className="container flex justify-between my-5 ">
        <div className="w-1/5 bg-white rounded-md shadow-md pt-2 pb-3">
          <div className="pl-2">
            <h4 className="text-xl font-semibold uppercase">Nguyễn Văn Đức</h4>
            <p className="text-sm text-gray-400">
              <Trans>Front End Developer</Trans>
            </p>
          </div>
          <div className="avatar"></div>

          {/* <Toggle
            id="lang"
            onChange={(e) => i18n.changeLanguage(e === true ? "en" : "vn")}
          /> */}
        </div>
        <div className="w-3/4">
          <div className=" bg-white rounded-md shadow-md">
            <Trans>Welcome to React</Trans>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
