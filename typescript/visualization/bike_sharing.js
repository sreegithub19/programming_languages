const { execFile } = require('child_process');

var child = execFile("python", ["-c",`
import numpy as np
import pandas as pd
from IPython.display import display,HTML
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
import warnings
warnings.filterwarnings('ignore')
import os

bikes_df = pd.read_csv("day.csv")
display(pd.read_csv("day.csv"))
display(bikes_df.dtypes)

display(bikes_df.head(10))

bikes_df.rename(columns={
    'instant':'rec_id',
    "dteday":"datetime",
    "yr":"year",
    "mnth":"month",
    "weathersit":"weather_condition",
    "hum":"humidity",
    "cnt":"total_count"
},inplace=True)
display(bikes_df.head())

# typecasting the datetime and numerical attributes to category

bikes_df['datetime'] = pd.to_datetime(bikes_df.datetime)
bikes_df['season'] = bikes_df.season.astype('category')
bikes_df['year'] = bikes_df.year.astype('category')
bikes_df['month'] = bikes_df.month.astype('category')
bikes_df['holiday'] = bikes_df.holiday.astype('category')
bikes_df['weekday'] = bikes_df.weekday.astype('category')
bikes_df['workingday'] = bikes_df.workingday.astype('category')
bikes_df['weather_condition'] = bikes_df.weather_condition.astype('category')

fig,ax = plt.subplots(figsize=(15,8))
sns.set_style('white')

# Barplot for seasonwise monthly distribution of counts

sns.barplot(x='month',y = 'total_count',data=bikes_df[['month','total_count','season']], hue='season',ax=ax)
ax.set_title('Seasonwise monthly distribution of counts')
plt.show()

# Barplot for weekday-wise monthly distribution of counts

fig,ax1 = plt.subplots(figsize=(15,8))

# Barplot for seasonwise monthly distribution of counts

sns.barplot(x='month',y = 'total_count',data=bikes_df[['month','total_count','weekday']], hue='weekday',ax=ax1)
ax1.set_title('Weekday-wise monthly distribution of counts')
plt.show()

fig,ax = plt.subplots(figsize=(15,8))

# Violin for yearwise distribution of counts

sns.violinplot(x='year',y = 'total_count',data=bikes_df[['year','total_count']])
ax.set_title('Yearwise distribution of counts')
plt.show()

fig,ax = plt.subplots(figsize=(15,8))

# Barplot for holiday distribution of counts

sns.barplot(data = bikes_df, x='holiday',y = 'total_count',hue='season')
ax.set_title('Holiday-wise distribution of counts')
plt.show()

fig,ax = plt.subplots(figsize=(15,8))

# Barplot for workingday distribution of counts

sns.barplot(data = bikes_df, x='workingday',y = 'total_count',hue='season')
ax.set_title('Workingday-wise distribution of counts')
plt.show()

fig,ax1 = plt.subplots(figsize=(15,8))

# Barplot for Weather_condition_wise distribution of counts

sns.barplot(data = bikes_df[['month','total_count','weather_condition']], x='weather_condition',y = 'total_count',ax=ax1)
ax.set_title('Weather_condition_wise distribution of counts')
plt.show()

fig,ax=plt.subplots(figsize=(15,8))
#Boxplot for total_count outliers
sns.boxplot(data=bikes_df[['total_count']])
ax.set_title('total_count outliers')
plt.show()

fig,ax=plt.subplots(figsize=(15,8))
#Box plot for Temp_windspeed_humidity_outliers
sns.boxplot(data=bikes_df[['temp','windspeed','humidity']])
ax.set_title('Temp_windspeed_humidity_outiers')
plt.show()
`
]);

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
process.stdin.pipe(child.stdin);
child.on('exit', () =>  process.exit());





