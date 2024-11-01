<template>
  <v-card class="card-component">
    <v-img :src="card.image" class="card-image">
      <img
        v-if="card.verified"
        src="/images/verification.png"
        alt="verified"
        class="verification-badge"
      />

      <div class="info-overlay">
        <div class="parameters">
          <div
            class="parameter-item"
            v-for="(value, label) in cardParameters"
            :key="label"
          >
            <span v-if="value" class="details-label">{{ label }}</span>
            <span v-if="value" class="details-value">{{ value }}</span>
          </div>
        </div>
      </div>
    </v-img>

    <div class="profile-header">
      <v-card-title class="name">{{ card.name }}</v-card-title>
      <div class="rating">
        <img
          v-for="n in Math.floor(card.rating)"
          :key="n"
          src="/images/star.svg"
          alt="star"
          class="star-icon"
        />
        <span class="rating-score">{{ card.rating.toFixed(1) }}</span>
      </div>
    </div>

    <div class="city">{{ card.city }}</div>
    <div class="description">{{ card.description }}</div>

    <div class="parameters-mobile">
      <div
        class="parameter-item"
        v-for="(value, label) in cardParameters"
        :key="label"
      >
        <span v-if="value" class="details-label">{{ label }}</span>
        <span v-if="value" class="details-value">{{ value }}</span>
      </div>
    </div>

    <div class="prices">
      <div
        v-for="(price, label) in cardPrices"
        :key="label"
        class="price-block"
      >
        <span v-if="price" class="time-label">{{ label }}</span>
        <span v-if="price" class="price">{{ price }} ₽</span>
      </div>
    </div>

    <v-btn class="contact-btn" @click="callPhone(card.phone)">
      <span class="phone-number">{{ card.phone }}</span>
      <div class="social">
        <v-btn icon @click="openTelegram" flat class="social-btn">
          <v-icon>
            <img src="/images/telegram.svg" alt="Telegram" />
          </v-icon>
        </v-btn>
        <v-btn icon @click="openWhatsApp" flat class="social-btn">
          <v-icon>
            <img src="/images/whatsapp.svg" alt="WhatsApp" />
          </v-icon>
        </v-btn>
      </div>
    </v-btn>
  </v-card>
</template>

<script lang="ts" setup>
import { useCardStore } from "@/store/cardStore";
import { Card } from "@/types";

const cardStore = useCardStore();
const card = cardStore.card;

function callPhone(phoneNumber: string) {
  window.location.href = `tel:${phoneNumber}`;
}

function openTelegram() {
  window.open(`https://t.me/${card.telegram}`, "_blank");
}

function openWhatsApp() {
  window.open(`https://wa.me/${card.whatsapp.replace(/\D/g, "")}`, "_blank");
}

console.log(card);

const cardParameters = {
  Возраст: card.age ? `${card.age}` : null,
  Грудь: card.chest ? `${card.chest}` : null,
  Вес: card.weight ? `${card.weight} кг` : null,
  Рост: card.height ? `${card.height} см` : null,
};

const cardPrices = {
  "1 час ": card.prices?.oneHour || null,
  "Ночь ": card.prices?.night || null,
  "2 часа ": card.prices?.twoHours || null,
  Экспресс: card.prices?.express || null,
};
</script>

<style scoped lang="scss" src="../styles/_cardComponent.scss"></style>
