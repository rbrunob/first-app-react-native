import { SafeAreaView } from 'react-native-safe-area-context'
import { Alert, Image, ScrollView, Text, View } from 'react-native'

import { images } from '../../constants';
import FormField from '@/components/FormField';
import { useState } from 'react';
import Button from '@/components/Button';
import { Link, router } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
    }

    setisSubmitting(true);

    try {
      router.replace('/Home')
    } catch (error: any) {
      Alert.alert('Error', error.message)
    } finally {
      setisSubmitting(false);
    }
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[80vh] h-full px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />

          <Text className='text-2xl text-white font-semibold mt-10 font-psemibold'>Login to Aora</Text>

          <FormField
            title="Username"
            value={form.username}
            placeholder='Enter your username'
            handleChangeText={(event: string) => setForm({ ...form, username: event })}
            otherStyles="mt-10"
          />

          <FormField
            title="Email"
            value={form.email}
            placeholder='email@example.com'
            handleChangeText={(event: string) => setForm({ ...form, email: event })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            placeholder='*******'
            handleChangeText={(event: string) => setForm({ ...form, password: event })}
            otherStyles="mt-7"
          />

          <Button
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Have an account already?
            </Text>
            <Link
              href="/SignIn"
              className='text-lg font-psemibold text-secondary'
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp