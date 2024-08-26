<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
// Clear cached permissions
 public function run(): void
    {
        // Clear cached permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Define permissions
        $permissions = [
            'view-dashboard',
            'manage-users',
            'view-sales',
            'view-products',
            'view-campaigns',
            'view-analytics',
            'view-faq',
            'contact-support',
        ];

        // Insert permissions
        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // Define roles and assign permissions to roles
        $roles = [
            'admin' => [
                'view-dashboard',
                'manage-users',
                'view-sales',
                'view-products',
                'view-campaigns',
                'view-analytics',
                'view-faq',
                'contact-support',
            ],
            'user' => [
                'view-sales',
                'view-products',
                'view-campaigns',
                'view-analytics',
                'view-faq',
                'contact-support',
            ],
        ];

        // Insert roles and assign permissions
        foreach ($roles as $roleName => $rolePermissions) {
            $role = Role::firstOrCreate(['name' => $roleName]);
            $role->syncPermissions($rolePermissions);
        }

        // Assign admin role to a specific user (you can adjust the user id)
        $adminUser = User::find(1);  // assuming user with ID 1 is admin
        if ($adminUser) {
            $adminUser->assignRole('admin');
        }
    }

}
