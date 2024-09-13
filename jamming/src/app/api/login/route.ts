// src/app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const scopes = ['user-read-private', 'user-read-email', 'user-read-recently-played', 'user-top-read'];
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!redirectUri || !clientId) {
    return NextResponse.json({ error: 'Server error: Missing redirect URI or Client ID' }, { status: 500 });
  }

  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
    scopes.join(' ')
  )}&redirect_uri=${encodeURIComponent(redirectUri)}`;

  return NextResponse.redirect(authUrl);
}
