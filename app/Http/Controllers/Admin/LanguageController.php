<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function changeLanguage(Request $request)
    {
        $language = $request->input('language');

        if (in_array($language, ['en', 'ar'])) {

            session(['app_locale' => $language]);

        }

        return back();
    }
}
