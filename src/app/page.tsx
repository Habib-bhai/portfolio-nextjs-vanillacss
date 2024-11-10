import Image from "next/image";
import ProjectCard from "@/components/project_cards/ProjectCards"

export default function Home() {
  return (
    <>
        <div className="hero-section">
        <div className="hero-col-one">
            <h1>Hi, I&apos;m Habib</h1>
            <h2> A Frontend Developer</h2>
            <p>Hello Everyone! I&apos;m HABIB ULLAH. A boy of 18 Who has Fallen in &apos;LOVE&apos; with Technology. My Learning to code journey started back in the 2nd year of College, when me and my Buddies won a Science exhibitions 1st prize for our college. In those projects I got the opportunity to code the &apos;Arduino&apos; circuits using C language. That victory ignited my ZEAL, so, I got into the wonderland of Web-Development. Exploring different roadmaps, I started learning JavaScript and Chose &apos;MERN&apos; Stack.So, the journey is been on its peak, exploring and conquering projects and ERRORS, and Am on my way to Become a Profficient Front End Developer.</p>
        </div>
        <div>
          <Image src={"/final-img.jpg"} alt="my pic" height={350} width={350} className="image-hero"/>
        </div>
    </div>

    <div id="projects" className="projects">
      <h1>Here is my Portfolio</h1>
          <div className="project-cards">
              <ProjectCard src="/cod-project.png" tags={["cod","UI", "front End", "Next.js"]}  href="https://cod-landing-page-six.vercel.app/"/>

              <ProjectCard src="/teknofest-project.png" tags={["teknofest","UI", "colaborated", "React.js"]}  href="https://teknofest-clone.vercel.app/"/>

              <ProjectCard src="/hable-ai-project.png" tags={["Hable Ai","Vercel AI", "SDK", "Next.js"]}  href="https://assignment-3-vercel-sdk-ai.netlify.app/"/>

              <ProjectCard src="/simple-recipe-app-project.png" tags={["recipe app","first project", "Next.js"]}  href="https://simple-recipe-app-styled-with-tailwindcss.vercel.app/"/>

              <ProjectCard src="/html-portfolio-project.png" tags={["portfolio","html", "CSS", "JS"]}  href="https://bro-habib-portfolio.netlify.app/#"/>
          </div>
    </div>

    <div id="contact" className="contact">
    <div className="form_container">
              <form className="form">
                <div className="form_child">

                    <div className="input_stylings">
                      <Image src={"/icons/dry-clean.png"} alt="image" height={20} width={20}/>
                    <input type="text" placeholder="Your Name" required className="input"/>
                    </div>

                    <div className="input_stylings">
                    <Image src={"/icons/email.png"} alt="image" height={20} width={20}/>
                  <input type="email" placeholder="Your Email" required className="input"/>
                    </div>

                    <div className="input_stylings">
                    <Image src={"/icons/smartphone.png"} alt="image" height={30} width={30}/>
                  <input type="number" placeholder="Your Phone" required className="input"/>
                    </div>

                    <div className="input_stylings">
                    <Image src={"/icons/compass.png"} alt="image" height={20} width={20}/>
                  <input type="text"  placeholder="Your Location" required className="input"/>
                    </div>

                </div>

                  <textarea   placeholder="Your Message" required className="form_textarea"/>

                  <div className="submit_container"> <button type="submit" className="submit_btn">Submit</button>
                  </div>
              </form>
            </div>
    </div>
    </>

  );
}
