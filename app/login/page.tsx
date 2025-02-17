"use client"
import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
  } from '@mantine/core';
  import Link from  'next/link'
  import {useRouter} from 'next/navigation'
  import classes from '../components/NavbarSimple.module.css';
import { useLazyQuery } from '@apollo/client';
import { LOGIN_USER } from './query/login';
import { useForm } from '@mantine/form';
import toast from 'react-hot-toast';

  
export default function AuthenticationImage() {
  const router = useRouter()
  const [loginUser, {data: dataLogin, loading: loadingLogin}] = useLazyQuery(LOGIN_USER);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => ( value?.length > 6 ? null : 'Invalid password'),
    },
  });
  
  function handleLogin(values: any){
    console.log(values);
    loginUser({
      variables:{
        email: values?.email,
        mot_passe: values?.password
      },
      onCompleted: (data) =>{
        toast.success("Login successful")
        if(data?.users?.length > 1) {
          localStorage.setItem("bridge-token", data?.users?.[0])
          router.push("/dashboard")
        }
        
      },
      onError: (err) =>{
        toast.error(`${err.message}`)
      }
    })
  }
    return (
      <div className={'h-sreen  '}>
        <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
          <Paper className={''} radius={0} p={30}>
            <Title order={2} className={''} c='#000'  ta="center" mt="md" mb={50}>
              Welcome back to <Text className={classes.gradientText}> THE BRIDGE! </Text>
            </Title>
    
            <TextInput 
              label="Email address" 
              styles={{label:{color: "#000"}}} 
              placeholder="your@gmail.com" 
              size="md" 
              key={form.key('email')}
              {...form.getInputProps('email')}
            />

            <PasswordInput 
              label="Password" 
              styles={{label:{color: "#000"}}} 
              placeholder="Your password" 
              mt="md" 
              size="md" 
              key={form.key('password')}
              {...form.getInputProps('password')}
            />
            <Checkbox  color="#0B8F23" styles={{
              label: {color: "#404040"}
            }} label="Keep me logged in" mt="xl" size="md" />
            <Button
              loading={loadingLogin} 
              type="submit" 
              // component={Link} 
              // href='/dashboard' 
              color="#0B8F23" 
              fullWidth mt="xl" size="md">
              Login
            </Button>
    
            {/* <Text ta="center" mt="md" c="#000">
              Don&apos;t have an account?{' '}
              <Anchor c="#0B8F23" href="#" fw={700}>
                Register
              </Anchor>
            </Text> */}
          </Paper>
        </form>
        
      </div>
    );
  }