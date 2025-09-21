import React, { useState } from 'react';

interface Course {
  name: string;
  grade: string;
}

const gradePoints: { [key: string]: number | null } = {
  'A': 4.0,
  'B+': 3.5,
  'B': 3.0,
  'C+': 2.5,
  'C': 2.0,
  'D+': 1.5,
  'D': 1.0,
  'F': 0.0,
  'W': null, // ไม่คิด W
};

export const Assignment: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [courseName, setCourseName] = useState('');
  const [courseGrade, setCourseGrade] = useState('A');
  const [gpa, setGpa] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const grades = Object.keys(gradePoints);

  const addCourse = () => {
    if (courseName.trim() === '') {
      setError('กรุณากรอกชื่อวิชา');
      return;
    }
    setCourses([...courses, { name: courseName, grade: courseGrade }]);
    setCourseName('');
    setCourseGrade('A');
    setError(null);
  };

  const removeCourse = (index: number) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const calculateGPA = () => {
    const validCourses = courses.filter((c) => gradePoints[c.grade] !== null);
    const totalPoints = validCourses.reduce(
      (sum, c) => sum + (gradePoints[c.grade] ?? 0),
      0
    );
    const result =
      validCourses.length > 0 ? totalPoints / validCourses.length : 0;
    setGpa(parseFloat(result.toFixed(2)));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>ระบบจัดการรายวิชา</h2>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="ชื่อวิชา"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <select
          value={courseGrade}
          onChange={(e) => setCourseGrade(e.target.value)}
        >
          {grades.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <button onClick={addCourse}>เพิ่มวิชา</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {courses.map((course, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>
            <span
              style={{
                color: course.grade === 'F' ? 'red' : 'black',
                fontWeight: course.grade === 'F' ? 'bold' : 'normal',
              }}
            >
              {course.name} ({course.grade})
            </span>
            <button
              onClick={() => removeCourse(index)}
              style={{ marginLeft: '10px', color: 'gray' }}
            >
              ลบ
            </button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '10px' }}>
        <button onClick={calculateGPA}>คำนวณ GPA</button>
        {gpa !== null && (
          <p>
            <strong>GPA:</strong> {gpa}
          </p>
        )}
      </div>
    </div>
  );
};