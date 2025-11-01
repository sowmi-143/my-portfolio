import { useState } from 'react';

type FormEntry = {
  name: string;
  email: string;
  phone: string;
};

function TableForm() {
  const [formData, setFormData] = useState<FormEntry>({ name: '', email: '', phone: '' });
  const [tableData, setTableData] = useState<FormEntry[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editIndex !== null) return; // prevent adding while editing
    setTableData([...tableData, formData]);
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setFormData(tableData[index]);
  };

  const handleSave = (index: number) => {
    const updated = [...tableData];
    updated[index] = formData;
    setTableData(updated);
    setEditIndex(null);
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleCancel = () => {
    setEditIndex(null);
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleDelete = (index: number) => {
    const updated = tableData.filter((_, i) => i !== index);
    setTableData(updated);
    if (editIndex === index) handleCancel();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" type="tel" value={formData.phone} onChange={handleChange} required />
        <button type="submit" disabled={editIndex !== null}>Add</button>
      </form>

      <table border={1} style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <>
                  <td><input name="name" value={formData.name} onChange={handleChange} /></td>
                  <td><input name="email" value={formData.email} onChange={handleChange} /></td>
                  <td><input name="phone" value={formData.phone} onChange={handleChange} /></td>
                  <td>
                    <button onClick={() => handleSave(index)}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableForm;