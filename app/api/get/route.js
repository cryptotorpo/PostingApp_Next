import { connect } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
const Model = require("../../models/model");

export async function GET(req, res) {
  await connect().then(async () => {
    const data = await Model.find();
    return NextResponse.json({ status: 200, data });
  }).catch(() => {
    console.log('error')
  })
  return NextResponse.json({status: 200, data: []})
}
