import {useForm} from "react-hook-form";
import './App.css'
import {useState} from "react";

const App = () => {
    const {reset, register, handleSubmit, formState:{errors}} = useForm()
    const [users, setUsers] = useState([])

    const addUser = (data) => {
        reset()
        setUsers([...users, data])
    }
    const userDelete = (data) => {
        const newUsers = users.filter((user,index) => index !== data)
        setUsers(newUsers)
    }
  return (
      <div>
            <form style={{margin:'0 auto', display:'flex', gap:'20px', flexDirection:'column', width:'400px', border: '4px solid black', padding:'20px', alignItems:'center',}} onSubmit={handleSubmit(addUser)}>
                <h1>Users</h1>

                <div style={{display:'flex', width:'300px', flexDirection:'column', gap:'10px'}}>
                    <input
                        type="text"
                        placeholder='name'
                        {...register('name',{required:true})}
                        className={errors.name ? 'errors' : ''}
                    />
                </div>
                <div style={{display:'flex', width:'300px', flexDirection:'column', gap:'10px'}}>
                    <input
                        type="text"
                        placeholder='username'
                        {...register('username', {required:true})}
                        className={errors.username ? 'errors' : ''}
                    />
                </div>
                <div style={{display:'flex', width:'300px', flexDirection:'column', gap:'10px'}}>
                    <input
                        type="text"
                        placeholder='email'
                        {...register('email', {required:true})}
                        className={errors.email ? 'errors' : ''}
                    />
                </div>
                <div style={{display:'flex', width:'300px', flexDirection:'column', gap:'10px'}}>
                    <input
                        type="number"
                        placeholder='phone'
                        {...register('phone', {required:true})}
                        className={errors.phone ? 'errors' : ''}
                    />
                </div>
                <div style={{display:'flex', width:'300px', flexDirection:'column', gap:'10px'}}>
                    <input
                        type="text"
                        placeholder='web-site'
                        {...register('webSite')}
                    />
                </div>

                <input type="submit"/>
            </form>
          <tr style={{display:'flex',gap:"20px", flexWrap:'wrap', justifyContent:'space-around', width:'1000px', margin:'30px auto'}}>
              {
                  users?(
                      users.map((item, index) => (
                          <td key={index} style={{display:'flex',alignItems:'center', width:'200px', flexDirection:'column', gap:'6px', border:'2px solid black'}}>
                                <span>{item.name}</span>
                                <span>{item.username}</span>
                                <span>{item.email}</span>
                                <span>{item.phone}</span>
                                <p>{item.webSite}</p>
                              <button onClick={() => userDelete(index)}>Удалить</button>
                          </td>
                      ))
                  ):(
                      <div>
                          <span>LOADING...</span>
                      </div>
                  )
              }
          </tr>

      </div>
  );
};

export default App;