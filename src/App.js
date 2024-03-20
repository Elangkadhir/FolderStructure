import "./App.css";
import { PageRouting } from "./PageRouting";
import "antd/dist/reset.css";
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0152A8",
        },
      }}
    >
      <PageRouting />
    </ConfigProvider>
  );
}

export default App;
