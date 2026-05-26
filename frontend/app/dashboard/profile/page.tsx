'use client';

import React from 'react';
import DashboardWrapper from '@/components/dashboard/DashboardWrapper';
import { 
  User, Mail, ShieldAlert, Calendar, 
  Code, Globe, CheckCircle2, ShieldCheck 
} from 'lucide-react';

/**
 * USER PROFILE INFORMATION PAGE
 * 
 * Analogy:
 * Think of this like a digital driver's license.
 * It houses all your official details—your photograph, your address (email), your birthdate (joined date),
 * and any stamps of authenticity (like GitHub or Google oauth connections)—all laid out beautifully 
 * in a secure dashboard layout!
 */
export default function UserProfilePage() {
  return (
    <DashboardWrapper>
      <div className="max-w-4xl space-y-8 animate-in fade-in duration-300">
        
        {/* Title Heading */}
        <div>
          <h1 className="text-3xl font-black tracking-tight text-zinc-950 dark:text-white">
            My Profile
          </h1>
          <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
            View your personal identity details, active credentials, and linked accounts.
          </p>
        </div>

        {/* Profile Card layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column: Avatar & Quick Stats Card */}
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-6 flex flex-col items-center justify-center text-center space-y-4 shadow-sm">
            {/* Styled initials avatar */}
            <div className="w-24 h-24 rounded-3xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center text-3xl font-black shadow-lg border border-zinc-250 dark:border-zinc-700">
              DF
            </div>
            
            <div className="space-y-1">
              <h3 className="text-lg font-black text-zinc-950 dark:text-white">Destiny Frank</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">destiny@staqed.com</p>
            </div>

            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-zinc-900 dark:text-zinc-100 bg-zinc-150 dark:bg-zinc-800 px-3 py-1 rounded-full uppercase tracking-wider">
              <ShieldCheck size={12} className="text-emerald-500" /> Admin Access
            </span>

            <div className="w-full border-t border-zinc-100 dark:border-zinc-800/80 pt-4 flex justify-around text-zinc-500 text-xs">
              <div className="flex flex-col">
                <span className="font-extrabold text-zinc-900 dark:text-white">Enterprise</span>
                <span>Current Plan</span>
              </div>
              <div className="w-[1px] bg-zinc-100 dark:bg-zinc-800" />
              <div className="flex flex-col">
                <span className="font-extrabold text-zinc-900 dark:text-white">Active</span>
                <span>Status</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Info Form Layout */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Card: Account Information */}
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-6 space-y-6">
              <h3 className="text-base font-bold text-zinc-950 dark:text-white border-b border-zinc-100 dark:border-zinc-800/85 pb-3">
                Account Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Field: Full Name */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Full Name</span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white">
                    <User size={16} className="text-zinc-400" />
                    <span>Destiny Frank</span>
                  </div>
                </div>

                {/* Field: Email */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Primary Email</span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white">
                    <Mail size={16} className="text-zinc-400" />
                    <span>destiny@staqed.com</span>
                  </div>
                </div>

                {/* Field: Created Date */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Member Since</span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white">
                    <Calendar size={16} className="text-zinc-400" />
                    <span>May 26, 2026</span>
                  </div>
                </div>

                {/* Field: Role */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Global Scope</span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white">
                    <ShieldAlert size={16} className="text-zinc-400" />
                    <span>Workspace Creator</span>
                  </div>
                </div>

              </div>

              {/* Biography Section */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Biography</span>
                <p className="text-sm leading-relaxed text-zinc-650 dark:text-zinc-350">
                  Fullstack developer specializing in Next.js Server Actions, Django Rest Framework security boundaries, rate limit custom throttlers, and secure OTP verification ledgers. Building modern SaaS architectures since 2020.
                </p>
              </div>

            </div>

            {/* Card: Linked Accounts */}
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-6 space-y-4">
              <h3 className="text-base font-bold text-zinc-950 dark:text-white border-b border-zinc-100 dark:border-zinc-800/85 pb-3">
                Linked OAuth Connections
              </h3>

              <div className="space-y-3">
                
                {/* Connection Row: GitHub */}
                <div className="flex items-center justify-between p-3 rounded-2xl border border-zinc-100 dark:border-zinc-800/50 bg-zinc-55/30 dark:bg-zinc-950/20">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                      <Code size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white">GitHub Account</h4>
                      <p className="text-xs text-zinc-500">Connected as @DestinyFranks</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    <CheckCircle2 size={12} /> Active
                  </span>
                </div>

                {/* Connection Row: Google */}
                <div className="flex items-center justify-between p-3 rounded-2xl border border-zinc-100 dark:border-zinc-800/50 bg-zinc-55/30 dark:bg-zinc-950/20">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                      <Globe size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Google Account</h4>
                      <p className="text-xs text-zinc-500">Not linked yet</p>
                    </div>
                  </div>
                  <button className="px-3.5 py-1 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-bold hover:shadow-md cursor-pointer transition-shadow">
                    Connect
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </DashboardWrapper>
  );
}
