# Generated by Django 4.1.12 on 2023-11-07 07:31

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('daily_expense', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expense',
            name='date_of_transaction',
            field=models.DateTimeField(default=django.utils.timezone.now, help_text='Date of transaction'),
        ),
    ]