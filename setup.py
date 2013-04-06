from setuptools import setup, find_packages

setup(
        include_package_data = True,
        name='dexy_rdw',
        packages=find_packages(),
        version="0.0.3",
        install_requires = [
            'dexy>=0.9.8'
            ]
        )
