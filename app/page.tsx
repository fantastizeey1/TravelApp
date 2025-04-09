import { useEffect } from "react";
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://plugin.aktok.com/aktokwsc-widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />

      {/* Mounting the widget */}
      <div>
        <div dangerouslySetInnerHTML={{ __html: '<aktokwsc-widget id="aktokwsc" uuid="77adbde1-3b80-4599-892c-cfccb0444b6c"></aktokwsc-widget>' }} />
      </div>
    </>
  );
}

