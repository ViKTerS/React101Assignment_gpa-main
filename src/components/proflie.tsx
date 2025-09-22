import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


// Zod schema
const MPFormSchema = z.object({
  prefix: z.string().min(1, "กรุณาเลือกคำนำหน้า"),
  firstName: z.string().min(1, "กรุณากรอกชื่อ"),
  lastName: z.string().min(1, "กรุณากรอกนามสกุล"),
  photo: z.string().url("กรุณาใส่ลิงก์รูปถ่าย"),
  workHistory: z.string().min(1, "กรุณากรอกประวัติการทำงาน"),
  achievement: z.string().min(1, "กรุณากรอกผลงาน"),
  minister: z.string(),
  ministry: z.string(),
  party: z.string().min(1, "กรุณากรอกชื่อพรรค"),
});

type MPFormType = z.infer<typeof MPFormSchema>;

export default function MPList() {
  const [mpList, setMpList] = useState<MPFormType[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<MPFormType>({
    resolver: zodResolver(MPFormSchema),
  });

  const onSubmit = (data: MPFormType) => {
    if (editIndex !== null) {
      const newList = [...mpList];
      newList[editIndex] = data;
      setMpList(newList);
      setEditIndex(null);
    } else {
      setMpList([...mpList, data]);
    }
    reset();
  };

  const handleEdit = (idx: number) => {
    const mp = mpList[idx];
    Object.entries(mp).forEach(([key, value]) => {
      setValue(key as keyof MPFormType, value);
    });
    setEditIndex(idx);
  };

  const handleDelete = (idx: number) => {
    setMpList(mpList.filter((_, i) => i !== idx));
    if (editIndex === idx) {
      reset();
      setEditIndex(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">ทำเนียบรายชื่อ ส.ส.</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block">คำนำหน้า</label>
          <select {...register("prefix")} className="input input-bordered w-full">
            <option value="">เลือก</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>
          {errors.prefix && <span className="text-red-500">{errors.prefix.message}</span>}
        </div>
        <div>
          <label className="block">ชื่อ</label>
          <input {...register("firstName")} className="input input-bordered w-full" />
          {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
        </div>
        <div>
          <label className="block">นามสกุล</label>
          <input {...register("lastName")} className="input input-bordered w-full" />
          {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
        </div>
        <div>
          <label className="block">ลิงก์รูปถ่าย 2”</label>
          <input {...register("photo")} className="input input-bordered w-full" />
          {errors.photo && <span className="text-red-500">{errors.photo.message}</span>}
        </div>
        <div className="md:col-span-2">
          <label className="block">ประวัติการทำงาน</label>
          <textarea {...register("workHistory")} className="textarea textarea-bordered w-full" />
          {errors.workHistory && <span className="text-red-500">{errors.workHistory.message}</span>}
        </div>
        <div className="md:col-span-2">
          <label className="block">ผลงานที่ผ่านมา</label>
          <textarea {...register("achievement")} className="textarea textarea-bordered w-full" />
          {errors.achievement && <span className="text-red-500">{errors.achievement.message}</span>}
        </div>
        <div>
          <label className="block">ตำแหน่งรัฐมนตรี</label>
          <input {...register("minister")} className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block">กระทรวง</label>
          <input {...register("ministry")} className="input input-bordered w-full" />
        </div>
        <div className="md:col-span-2">
          <label className="block">สังกัดพรรคการเมือง</label>
          <input {...register("party")} className="input input-bordered w-full" />
          {errors.party && <span className="text-red-500">{errors.party.message}</span>}
        </div>
        <div className="md:col-span-2 flex gap-2">
          <button type="submit" className="btn btn-primary">
            {editIndex !== null ? "บันทึกการแก้ไข" : "เพิ่ม"}
          </button>
          {editIndex !== null && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                reset();
                setEditIndex(null);
              }}
            >
              ยกเลิก
            </button>
          )}
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">รายชื่อสมาชิก</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mpList.map((mp, idx) => (
            <div key={idx} className="border rounded-lg p-4 flex flex-col gap-2 shadow">
              <div className="flex gap-4 items-center">
                <img
                  src={mp.photo}
                  alt="รูปถ่าย"
                  className="w-16 h-16 object-cover rounded-full border"
                />
                <div>
                  <div className="font-bold">{mp.prefix} {mp.firstName} {mp.lastName}</div>
                  <div className="text-sm text-gray-500">{mp.party}</div>
                </div>
              </div>
              <div>
                <span className="font-semibold">ประวัติ:</span> {mp.workHistory}
              </div>
              <div>
                <span className="font-semibold">ผลงาน:</span> {mp.achievement}
              </div>
              <div>
                <span className="font-semibold">ตำแหน่งรัฐมนตรี:</span> {mp.minister || "-"}
              </div>
              <div>
                <span className="font-semibold">กระทรวง:</span> {mp.ministry || "-"}
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleEdit(idx)}
                >
                  แก้ไข
                </button>
                <button
                  className="btn btn-error btn-sm"
                  onClick={() => handleDelete(idx)}
                >
                  ลบ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}