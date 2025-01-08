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
  // import classes from './AuthenticationImage.module.css';
  
  export default function AuthenticationImage() {
    return (
      <div className={''}>
        <Paper className={''} radius={0} p={30}>
          <Title order={2} className={''} c='#000'  ta="center" mt="md" mb={50}>
            Welcome back to Mantine!
          </Title>
  
          <TextInput label="Email address" styles={{label:{color: "#000"}}} placeholder="hello@gmail.com" size="md" />
          <PasswordInput label="Password" styles={{label:{color: "#000"}}} placeholder="Your password" mt="md" size="md" />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button fullWidth mt="xl" size="md">
            Login
          </Button>
  
          <Text ta="center" mt="md" c="#000">
            Don&apos;t have an account?{' '}
            <Anchor href="#" fw={700}>
              Register
            </Anchor>
          </Text>
        </Paper>
      </div>
    );
  }