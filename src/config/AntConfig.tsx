import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
import zhCN from "antd/locale/zh_CN";
import { ColorPicker, ConfigProvider } from "antd";
import { useState } from "react";
import setting from "@/settings/projectSetting";
export default function AntConfig({ children }: { children: React.ReactNode }) {
  const [primary, setPrimary] = useState("#1677ff");
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primary,
        },
      }}
      locale={zhCN}
    >
      {setting.showThemeColor && (
        <ColorPicker
          showText
          value={primary}
          onChangeComplete={(color) => setPrimary(color.toHexString())}
        />
      )}
      {children}
    </ConfigProvider>
  );
}
