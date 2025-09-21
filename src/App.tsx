import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonAdd from './components/buttonAdd'
import HeaderTxt from './components/HeaderTxt'

type Member = {
  nameTH: string;   // ชื่อภาษาไทย
  nameEN: string;   // ชื่อภาษาอังกฤษ
  heightCm: number; // ส่วนสูง (เซนติเมตร)
  age: number;      // อายุ (ปี)
  imageUrl?: string;// URL รูปภาพ (ถ้ามี)
  group?: string;   // กลุ่ม (ถ้ามี)
};

function App() {

const List_MEMBERS: Member[] = [
{ nameTH: "อลัน พศวีร์ ศรีอรุโณทัย", nameEN: "Alan", heightCm: 185, age: 23, imageUrl: "https://example.com/mhalan.jpg" , group: "BUS" },
{ nameTH: "มาร์ค กฤษณ์ กัญจนาทิพย์", nameEN: "Marckris", heightCm: 172, age: 22, imageUrl: "ttps://example.com/mharckris.jpg" , group: "BUS" },
{ nameTH: "ขุนพล ปองพล ปัญญามิตร", nameEN: "Khunpol", heightCm: 179, age: 22, imageUrl: "https://example.com/mhkhunpol.jpg" , group: "BUS" },
{ nameTH: "ฮาร์ท ชุติวัฒน์ จันเคน", nameEN: "Heart", heightCm: 174, age: 22, imageUrl: "https://example.com/mhheart.jpg" , group: "BUS" },
{ nameTH: "จินวุค คิม", nameEN: "Jinwook", heightCm: 178, age: 21, imageUrl: "https://example.com/mhjinwook.jpg" , group: "BUS" },
{ nameTH: "ไทย ชญานนท์ ภาคฐิน", nameEN: "Thai", heightCm: 178, age: 20, imageUrl: "https://example.com/mhthai.jpg" , group: "BUS" },
{ nameTH: "เน็กซ์ ณัฐกิตติ์ แช่มดารา", nameEN: "Nex", heightCm: 180, age: 20, imageUrl: "https://example.com/mhnex.jpg" , group: "BUS" },
{ nameTH: "ภู ธัชชัย ลิ้มปัญญากุล", nameEN: "Phu", heightCm: 180, age: 20, imageUrl: "https://example.com/mhphu.jpg" , group: "BUS" },
{ nameTH: "คอปเปอร์ เดชาวัต พรเดชาพิพัฒ", nameEN: "Copper", heightCm: 173, age: 19, imageUrl: "https://example.com/mhcopper.jpg" , group: "BUS" },
{ nameTH: "เอเอ อชิรกรณ์ สุวิทยะเสถียร", nameEN: "AA", heightCm: 178, age: 19, imageUrl: "https://example.com/mhaa.jpg" , group: "BUS" },
{ nameTH: "จั๋ง ธีร์ บุญเสริมสุวงศ์", nameEN: "Jungt", heightCm: 173, age: 19, imageUrl: "https://example.com/mhjungt.jpg" , group: "BUS" },
{ nameTH: "ภีม วสุพล พรพนานุรักษ์", nameEN: "Peem", heightCm: 187, age: 19, imageUrl: "https://example.com/mhpeem.jpg" , group: "BUS" },

//+saja boys 5 คน
// const SAJA_MEMBERS: Member[] = [
// { nameTH: "ภัทรพล ศรีอรุโณทัย", nameEN: "Pat", heightCm: 180, age: 23, imageUrl: "https://example.com/sjpat.jpg" , group: "SAJA" },
// { nameTH: "ปุณณวิชญ์ ศรีอรุโณทัย", nameEN: "Pun", heightCm: 175, age: 22, imageUrl: "https://example.com/sjpun.jpg" , group: "SAJA" },
// { nameTH: "ภัคพล ศรีอรุโณทัย", nameEN: "Pak", heightCm: 178, age: 22, imageUrl: "https://example.com/sjpak.jpg" , group: "SAJA" },
// { nameTH: "พีรพัฒน์ ศรีอรุโณทัย", nameEN: "Peerapat", heightCm: 182, age: 21, imageUrl: "https://example.com/sjpeerapat.jpg" , group: "SAJA" },
// { nameTH: "พีรพล ศรีอรุโณทัย", nameEN: "Peerapon", heightCm: 177, age: 20, imageUrl: "https://example.com/sjpeerapon.jpg" , group: "SAJA" }
];

  return (
    <>
    {/* // แยกไปเป็น component 
    // Prop = List_MEMBERS(ทั้งหมด), "ชื่อวง"
    // ให้ component แสดงผลเฉพาะสมาชิกในวงที่ระบุ 
    <MemberList members={List_MEMBERS} groupName="BUS" />
    <MemberList members={List_MEMBERS} groupName="SAJA" />
    // */}
    <ul>
    {List_MEMBERS.map((member, index) => (
      // ถ้าเป็นวง BUS ใช้ตัวอักษรสีเขียว
      //  ถ้าเป็นวง SAJA ใช้ตัวอักษรสีฟ้า
      <li key={index}
      className={member.group === "BUS" ? "green-txt" : "red-txt"}>
        {member.nameTH} ({member.nameEN})
        <img src={member.imageUrl} />
      </li>
    ))}
    </ul>


      <div>
        <HeaderTxt title="Computer Science" txtsize='100' status={false} />
        <HeaderTxt title="Maejo University" txtsize='50' status={true} />
        <HeaderTxt title="Maejo University" txtsize='50' status={false} />
        <HeaderTxt title="Maejo University" txtsize='50' status={true} />
        <HeaderTxt title="Maejo University" txtsize='50' status={false} />

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ButtonAdd onClick={() => alert("Clicked!")} /> 
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
