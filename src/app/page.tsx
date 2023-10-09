"use client"
import { selectUser, useSelector } from '@/lib/redux'
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const user = useSelector(selectUser);
  console.log(user)

  if (user) {
    router.push('/dashboard/')
  } else {
    router.push('auth/login')
  }
}

