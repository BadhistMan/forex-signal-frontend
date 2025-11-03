import React, { useState, useEffect } from 'react';
import { User, Calendar, TrendingUp, Bell, Shield } from 'lucide-react';
import { authAPI, signalsAPI } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await authAPI.getProfile();
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">Failed to load profile</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Profile</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your account and view your trading statistics
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{profile.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{profile.email}</p>
                {profile.is_admin && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 mt-1">
                    Administrator
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {profile.stats?.totalSignals || 0}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Signals</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {profile.stats?.unreadSignals || 0}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Unread Signals</div>
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Details</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Member Since</span>
                <span className="text-gray-900 dark:text-white">
                  {new Date(profile.created_at).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Last Login</span>
                <span className="text-gray-900 dark:text-white">
                  {profile.last_login ? new Date(profile.last_login).toLocaleDateString() : 'Never'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Account Type</span>
                <span className="text-gray-900 dark:text-white">
                  {profile.is_admin ? 'Premium Admin' : 'Standard User'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Subscription Status */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Signal Status</h4>
            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400 mb-2">
              <Bell className="w-5 h-5" />
              <span className="font-medium">Active</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              You are receiving real-time trading signals for all markets.
            </p>
          </div>

          {/* Risk Disclaimer */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Risk Disclaimer</h4>
            </div>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              Trading involves substantial risk. The signals provided are for informational purposes only and should not be considered as financial advice.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Trading Insights</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-blue-700 dark:text-blue-300">Signals Today</span>
                <span className="text-blue-900 dark:text-blue-100 font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-700 dark:text-blue-300">Accuracy Rate</span>
                <span className="text-blue-900 dark:text-blue-100 font-medium">78.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-700 dark:text-blue-300">Active Markets</span>
                <span className="text-blue-900 dark:text-blue-100 font-medium">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
