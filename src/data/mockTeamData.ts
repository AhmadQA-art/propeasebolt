import { TeamMember, Task, Activity } from '../types/people';

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    type: 'team',
    name: 'Sarah Johnson',
    email: 'sarah.j@propease.com',
    phone: '(555) 123-4567',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'active',
    createdAt: '2024-01-15',
    role: 'Property Manager',
    department: 'Operations',
    assignedTasks: 5,
    lastActive: '2024-03-15T14:30:00Z'
  },
  {
    id: '2',
    type: 'team',
    name: 'Michael Chen',
    email: 'michael.c@propease.com',
    phone: '(555) 234-5678',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'busy',
    createdAt: '2024-02-01',
    role: 'Maintenance Supervisor',
    department: 'Maintenance',
    assignedTasks: 3,
    lastActive: '2024-03-15T13:15:00Z'
  },
  {
    id: '3',
    type: 'team',
    name: 'Emily Rodriguez',
    email: 'emily.r@propease.com',
    phone: '(555) 345-6789',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'offline',
    createdAt: '2024-01-20',
    role: 'Leasing Agent',
    department: 'Sales',
    assignedTasks: 2,
    lastActive: '2024-03-14T16:45:00Z'
  },
  {
    id: '4',
    type: 'team',
    name: 'David Kim',
    email: 'david.k@propease.com',
    phone: '(555) 456-7890',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'active',
    createdAt: '2024-02-15',
    role: 'Financial Analyst',
    department: 'Finance',
    assignedTasks: 4,
    lastActive: '2024-03-15T11:30:00Z'
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Review Lease Renewals',
    description: 'Review and process upcoming lease renewals for Sunset Apartments',
    assignee: mockTeamMembers[0],
    dueDate: '2024-03-20',
    status: 'in-progress',
    priority: 'high'
  },
  {
    id: '2',
    title: 'Maintenance Inspection',
    description: 'Conduct quarterly maintenance inspection for Building A',
    assignee: mockTeamMembers[1],
    dueDate: '2024-03-25',
    status: 'pending',
    priority: 'medium'
  },
  {
    id: '3',
    title: 'Update Tenant Portal',
    description: 'Implement new features in the tenant portal',
    assignee: mockTeamMembers[3],
    dueDate: '2024-03-22',
    status: 'in-progress',
    priority: 'medium'
  },
  {
    id: '4',
    title: 'Schedule Property Viewings',
    description: 'Organize viewings for vacant units',
    assignee: mockTeamMembers[2],
    dueDate: '2024-03-18',
    status: 'completed',
    priority: 'low'
  }
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    user: mockTeamMembers[0],
    action: 'completed',
    target: 'lease renewal for Unit 204',
    timestamp: '2024-03-15T14:30:00Z'
  },
  {
    id: '2',
    user: mockTeamMembers[1],
    action: 'assigned',
    target: 'maintenance request to Mike Wilson',
    timestamp: '2024-03-15T11:20:00Z'
  },
  {
    id: '3',
    user: mockTeamMembers[2],
    action: 'scheduled',
    target: 'property viewing for tomorrow',
    timestamp: '2024-03-15T10:15:00Z'
  }
];