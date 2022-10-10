# InputField

```jsx
import { useState } from 'react'
import InputField from './index'

function ParentComponent () {
  const [inputVal, setInputVal] = useState('')

  function handleChange (event) {
    const { value } = event.target
    console.log(value)

    setInputVal(value)
  }

  return (
    <div>
      <InputLabel htmlFor="name">Name</InputLabel>
      <InputField icon={<User />} id="name" isError={true} handleChange={handleChange} value={inputVal} />
    </div>
  )
}
```