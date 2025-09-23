import ThemeInfo from "./theme-info";

export const metadata = {
  title: "Settings",
};

const SettingsPage = () => {
  return (
    <div className="h-full w-full max-w-[1200px] mx-auto">
      <div
        className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 w-full rounded-[8px] p-4 
        max-[768px]:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] max-[768px]:gap-3.5 
        max-[480px]:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] max-[480px]:gap-3"
      >
        <ThemeInfo name="GitHub Dark" icon="/themes/github-dark.png" publisher="GitHub" theme="github-dark" />
        <ThemeInfo name="Dracula" icon="/themes/dracula.png" publisher="Dracula Theme" theme="dracula" />
        <ThemeInfo name="Ayu Dark" icon="/themes/ayu.png" publisher="teabyii" theme="ayu-dark" />
        <ThemeInfo name="Ayu Mirage" icon="/themes/ayu.png" publisher="teabyii" theme="ayu-mirage" />
        <ThemeInfo name="Nord" icon="/themes/nord.png" publisher="arcticicestudio" theme="nord" />
        <ThemeInfo name="Night Owl" icon="/themes/night-owl.png" publisher="sarah.drasner" theme="night-owl" />
      </div>
    </div>
  );
};

export default SettingsPage;
