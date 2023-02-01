import './App.css';
import Header from './components/Header';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
 function App() {
  const [form, setForm] = useState({});
  // const [email, setEmail] = useState();
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, form]);
    setForm(form);
  }
  const removeItem=(index)=>{
      let arr=data;
      arr.splice(index,1);
      setData([...arr]);
  }
  return (
    <div className="App">
      <Header />
      <div className="form">

        <Stack spacing={2} direction="row">
          <TextField value={form.name} id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setForm({...form,name:event.target.value})} />

          <TextField value={form.email} id="outlined-basic" label="Email" variant="outlined" onChange={(event) => setForm({...form,email: event.target.value})} />

          <Button onClick={addData} variant="contained" color="secondary" >Add</Button>
        </Stack>
      </div>


      <div className="data">
        <div className='data_val'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((ele, index) => {
            return (
              < div className = "data_val" >
    
                    <h4>{ele.name}</h4>
                        <h4>{ele.email}</h4>
                        <Button onClick={()=>removeItem(index)} variant="contained" color="error">
                      <DeleteIcon />
                    </Button>
                  </div>
      )
          })
        }
    </div>

    </div >
  );
}

export default App;
