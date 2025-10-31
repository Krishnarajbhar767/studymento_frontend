// Fixed Version
import { api } from "@/app/lib/utils/axios";

async function About() {
    const courses = await api.get("/student/courses");
    console.log("STUDENT COURUSE DATA", courses);

    return (
        <main>
            <h1>Student Courses Overview</h1>
            {/* Example of displaying data, assuming courses.data is the array */}
        </main>
    );
}

export default About;
