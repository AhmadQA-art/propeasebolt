import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Building2,
  FileText,
  DollarSign,
  CreditCard,
  Users2,
  MessageSquare,
  Wrench,
  HelpCircle
} from 'lucide-react';
import UserProfile from './UserProfile';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Users, label: 'Residents', href: '/residents' },
  { icon: Building2, label: 'Properties', href: '/properties' },
  { icon: FileText, label: 'Documents', href: '/documents' },
  { icon: DollarSign, label: 'Finances', href: '/finances' },
  { icon: CreditCard, label: 'Payments', href: '/payments' },
  { icon: Users2, label: 'Team', href: '/team' },
  { icon: MessageSquare, label: 'Communications', href: '/communications' },
  { icon: Wrench, label: 'Maintenance', href: '/maintenance' },
];

export default function Sidebar() {
  const location = useLocation();

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <div className="w-64 h-screen bg-[#F8F8F8] border-r border-gray-200 flex flex-col fixed left-0 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
      <div className="p-6">
        <Link to="/" className="block">
          <img
            src="/Untitled_design__2_-removebg.png"
            alt="PropEase"
            className="h-12 w-auto"
          />
        </Link>
      </div>
      
      <nav className="flex-1 px-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center px-4 py-3 rounded-lg group transition-colors ${
                isActive(item.href)
                  ? 'bg-white text-[#2C3539] shadow-sm'
                  : 'text-[#2C3539] hover:bg-white'
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Link
          to="/help"
          className="flex items-center px-4 py-3 rounded-lg text-[#2C3539] hover:bg-white mb-4"
        >
          <HelpCircle className="h-5 w-5 mr-3" />
          <span>Help Center</span>
        </Link>

        <UserProfile
          name="John Doe"
          email="john@propease.com"
          imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>
    </div>
  );
}