import Toggle from "./components/toggle";
import { Trans, useTranslation } from "react-i18next";
import Button from "./components/button";

function App() {
  const { i18n } = useTranslation();
  return (
    <div className="bg-gray-50 h-screen w-screen flex justify-center">
      <div className="container flex ">
        <div>
          <Toggle
            id="lang"
            onChange={(e) => i18n.changeLanguage(e === true ? "en" : "vn")}
          />
          <Button>abc</Button>
        </div>
        <Trans>Welcome to React</Trans>
      </div>
    </div>
  );
}

export default App;
