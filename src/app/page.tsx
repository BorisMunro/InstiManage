"use client"
import { selectUser, useSelector } from '@/lib/redux'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();
  const user = useSelector(selectUser);

  if (user) {
    router.push('/dashboard/')
  } else {
    router.push('/auth/login')
  }
}

