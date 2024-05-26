"use client";

import { IconGauge, IconNotes, IconActivity, IconPresentationAnalytics, IconAdjustments, IconLock, IconScan } from "@tabler/icons-react";

export const basePath = "/site";

export const heroNutritionUrl = "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const heroFitnessUrl = "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export const ROUTES = Object.freeze([
    { label: 'Dashboard', icon: IconGauge, baseLink: '/dashboard' },
    { label: 'Scan', icon: IconScan, baseLink: '/scanner' },
    {
        label: 'Calorie Tracker',
        icon: IconNotes,
        initiallyOpened: true,
        links: [
            { label: 'Diary', link: '/diet' },
            { label: 'Recipes', link: '/diet/recipes' },
            { label: 'Metrics', link: '/diet/metrics' },
        ],
    },
    {
        label: 'Gym Tracker',
        icon: IconActivity,
        links: [
            { label: 'Log workout', link: '/workout' },
            { label: 'Timer', link: '/workout/timer' },
            { label: 'Metrics', link: '/workout/metrics' },
        ],
    },
    { label: 'Settings', icon: IconAdjustments, baseLink: '/settings' },
    {
        label: 'Security',
        icon: IconLock,
        links: [
            { label: 'Enable 2FA', link: '/' },
            { label: 'Change password', link: '/' },
            { label: 'Recovery codes', link: '/' },
        ],
    },
])