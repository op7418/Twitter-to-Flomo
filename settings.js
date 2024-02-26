<!DOCTYPE html>
<html>
<head>
    <title>Settings</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-4">
    <h3 class="text-lg font-bold mb-4">Flomo Settings</h3>
    <div class="mb-4">
        <label class="block mb-2" for="flomoUrl">Flomo URL:</label>
        <input class="border p-2 rounded w-full" type="text" id="flomoUrl">
    </div>
    <div class="mb-4">
        <label class="block mb-2" for="contentPrefix">Content Prefix:</label>
        <input class="border p-2 rounded w-full" type="text" id="contentPrefix">
    </div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" id="saveSettings">Save</button>
    <p id="status" class="mt-2"></p>
</body>
</html>
