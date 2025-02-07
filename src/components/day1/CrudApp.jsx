// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [data, setData] = useState([]);
//   const [editIndex, setEditIndex] = useState(null); // لتحديد العنصر الذي سيتم تعديله

//   // قراءة البيانات من localStorage عند تحميل الصفحة
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('data')) || [];
//     setData(storedData);
//   }, []);

//   // حفظ البيانات إلى localStorage
//   const saveData = (newData) => {
//     localStorage.setItem('data', JSON.stringify(newData));
//   };

//   // إضافة عنصر جديد إلى البيانات
//   const addData = () => {
//     if (name && age) {
//       const newData = [...data, { name, age }];
//       setData(newData);
//       saveData(newData);
//       setName('');
//       setAge('');
//     } else {
//       alert('الرجاء ملء جميع الحقول');
//     }
//   };

//   // تحديث البيانات
//   const updateData = () => {
//     const updatedData = [...data];
//     updatedData[editIndex] = { name, age };
//     setData(updatedData);
//     saveData(updatedData);
//     setName('');
//     setAge('');
//     setEditIndex(null); // إعادة تعيين الـ editIndex
//   };

//   // حذف البيانات
//   const deleteData = (index) => {
//     const updatedData = data.filter((_, i) => i !== index);
//     setData(updatedData);
//     saveData(updatedData);
//   };

//   // تحديد البيانات التي سيتم تعديلها
//   const editData = (index) => {
//     setName(data[index].name);
//     setAge(data[index].age);
//     setEditIndex(index);
//   };

//   return (
//     <div className="App">
//       <h1>تطبيق CRUD باستخدام LocalStorage</h1>

//       {/* نموذج الإدخال */}
//       <div>
//         <input
//           type="text"
//           placeholder="الاسم"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="العمر"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//         {editIndex !== null ? (
//           <button onClick={updateData}>تحديث البيانات</button>
//         ) : (
//           <button onClick={addData}>إضافة البيانات</button>
//         )}
//       </div>

//       {/* جدول عرض البيانات */}
//       <table border="1">
//         <thead>
//           <tr>
//             <th>الاسم</th>
//             <th>العمر</th>
//             <th>التعديل</th>
//             <th>الحذف</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               <td>{item.age}</td>
//               <td>
//                 <button onClick={() => editData(index)}>تعديل</button>
//               </td>
//               <td>
//                 <button onClick={() => deleteData(index)}>حذف</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;
// import React from "react";

// const TeacherProfile = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
//         <img
//           src="https://via.placeholder.com/150"
//           alt="Teacher Profile"
//           className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
//         />
//         <h2 className="text-2xl font-semibold mt-4">أ. أحمد محمد</h2>
//         <p className="text-gray-600">معلم الرياضيات</p>
//         <p className="text-gray-500 mt-2">📧 ahmed@example.com</p>
//         <p className="text-gray-500">📞 0123456789</p>

//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2">📅 جدول الحصص</h3>
//           <ul className="bg-gray-200 p-3 rounded-lg">
//             <li className="py-1">🔹 الأحد - الرياضيات (8:00 - 9:30)</li>
//             <li className="py-1">🔹 الإثنين - الجبر (10:00 - 11:30)</li>
//             <li className="py-1">🔹 الأربعاء - الإحصاء (12:00 - 1:30)</li>
//           </ul>
//         </div>

      
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2">⭐ تقييمات الطلاب</h3>
//           <p className="text-gray-600">"أستاذ رائع ويشرح بوضوح!" - طالب</p>
//           <p className="text-gray-600">"أسلوبه في التدريس مميز جدًا!" - طالبة</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherProfile;

