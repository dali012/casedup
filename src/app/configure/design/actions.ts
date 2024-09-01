"use server";

import { db } from "@/db";
import {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
} from "@prisma/client";

export type SaveConfigurationArgs = {
  color: CaseColor;
  model: PhoneModel;
  material: CaseMaterial;
  finish: CaseFinish;
  configId: string;
};

export async function saveConfiguration({
  color,
  model,
  material,
  finish,
  configId,
}: {
  color: CaseColor;
  model: PhoneModel;
  material: CaseMaterial;
  finish: CaseFinish;
  configId: string;
}) {
  await db.configuration.update({
    where: {
      id: configId,
    },
    data: {
      color,
      model,
      material,
      finish,
    },
  });
}
