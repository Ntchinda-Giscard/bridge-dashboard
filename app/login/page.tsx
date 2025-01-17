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
  import classes from '../components/NavbarSimple.module.css';
  
  export default function AuthenticationImage() {
    return (
      <div className={'h-sreen  '}>
        <Paper className={''} radius={0} p={30}>
          <Title order={2} className={''} c='#000'  ta="center" mt="md" mb={50}>
            Welcome back to <Text className={classes.gradientText}> THE BRIDGE! </Text>
          </Title>
  
          <TextInput label="Email address" styles={{label:{color: "#000"}}} placeholder="hello@gmail.com" size="md" />
          <PasswordInput label="Password" styles={{label:{color: "#000"}}} placeholder="Your password" mt="md" size="md" />
          <Checkbox  color="#0B8F23" label="Keep me logged in" mt="xl" size="md" />
          <Button component={Link} href='/dashboard' color="#0B8F23" fullWidth mt="xl" size="md">
            Login
          </Button>
  
          <Text ta="center" mt="md" c="#000">
            Don&apos;t have an account?{' '}
            <Anchor c="#0B8F23" href="#" fw={700}>
              Register
            </Anchor>
          </Text>
        </Paper>
      </div>
    );
  }