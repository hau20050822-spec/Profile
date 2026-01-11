import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="space-y-1">
      <Profile />
      <Skills />
      <Projects />
    </div>
  );
}
