"use client"
import { selectUserName, useSelector } from '@/lib/redux'
import { redirect } from 'next/navigation';

export default function Home() {
  
  const userName = useSelector(selectUserName);

  if (userName) {
    redirect('dashboard')
  } else {
    redirect('auth/login')
  }
}

